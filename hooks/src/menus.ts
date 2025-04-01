import { formatRoute } from '../utils'
export const menus = [
    {
        title: '生命周期',
        children: ['useUnmount', 'useUnmountedRef'].map(route => ({
            title: route, link: `/hooks/${formatRoute(route)}`
        }))
    },
    {
        title: '状态',
        children: [
            'useBoolean',
            'useCookieState',
            'useDebounce',
            'useGetState',
            'useLocalStorageState',
            'useMap',
            'usePrevious',
            'useResetState',
            'useSafeState',
            'useSessionStorageState',
            'useSet',
            'useSetState',
            'useToggle',
            'useThrottle',
        ].map(route => ({
            title: route, link: `/hooks/${formatRoute(route)}`
        }))
    },
    {
        title: 'Effect',
        children: ['useDebounceFn', 'useThrottleFn', 'useUpdateEffect'].map(route => ({
            title: route, link: `/hooks/${formatRoute(route)}`
        }))
    },
    {
        title: '进阶',
        children: ['useLatest', 'useMemoizedFn'].map(route => ({
            title: route, link: `/hooks/${formatRoute(route)}`
        }))
    },
];
