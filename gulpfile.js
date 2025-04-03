// 导入依赖库
import { deleteAsync } from "del"; // 文件删除工具
import gulp from "gulp"; // 构建工具
import babel from "gulp-babel"; // Babel 转译插件
import ts from "gulp-typescript"; // TypeScript 编译插件

/**
 * 清理构建目录任务
 * 删除 lib/, es/, dist/ 目录中的所有文件
 */
gulp.task("clean", async () => {
  await deleteAsync(["lib/**", "es/**", "dist/**"]);
});

/**
 * 生成 ESM 模块格式代码
 * 1. 读取 tsconfig.pro.json 配置，指定模块格式为 ESNext
 * 2. 编译 TypeScript 代码为 ESM 格式的 JS
 * 3. 输出到 es/ 目录
 */
gulp.task("es", () => {
  const tsProject = ts.createProject("tsconfig.pro.json", {
    module: "ESNext", // 指定输出为 ES Modules
  });
  return tsProject
    .src() // 读取 TypeScript 源文件
    .pipe(tsProject()) // 编译 TypeScript
    .pipe(gulp.dest("es/")); // 输出到 es 目录
});

/**
 * 生成 CommonJS 模块格式代码
 * 1. 读取 es/ 目录下的 ESM 格式 JS 文件
 * 2. 通过 Babel 转译为 CommonJS 格式
 * 3. 输出到 lib/ 目录
 */
gulp.task("cjs", () => {
  return gulp
    .src(["./es/**/*.js"]) // 读取 ESM 编译后的 JS 文件
    .pipe(
      babel({
        configFile: "../../.babelrc", // 指定 Babel 配置文件
      })
    )
    .pipe(gulp.dest("lib/")); // 输出到 lib 目录
});

/**
 * 生成类型声明文件 (.d.ts)
 * 1. 读取 tsconfig.pro.json 配置，启用声明文件生成
 * 2. 仅生成类型声明（不生成 JS 代码）
 * 3. 输出到 es/ 和 lib/ 目录（保证两种模块格式都能访问类型）
 */
gulp.task("declaration", () => {
  const tsProject = ts.createProject("tsconfig.pro.json", {
    declaration: true, // 开启声明文件生成
    emitDeclarationOnly: true, // 仅生成声明文件
  });
  return tsProject
    .src()
    .pipe(tsProject())
    .pipe(gulp.dest("es/")) // ESM 格式的类型声明
    .pipe(gulp.dest("lib/")); // CommonJS 格式的类型声明
});
/**
 * 默认任务执行顺序：
 * 1. clean -> 清理旧文件
 * 2. es -> 生成 ESM 模块
 * 3. cjs -> 转译 CommonJS 模块
 * 4. declaration -> 生成类型声明
 */
export default gulp.series("clean", "es", "cjs", "declaration");
