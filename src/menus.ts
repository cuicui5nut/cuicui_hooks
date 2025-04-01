export const menus = [
    {
        title: '生命周期',
        children: [{
            title: "useUnmount",
            link: 'useUnmount'
        }, {
            title: "useUnmountedRef",
            link: 'useUnmountedRef'
        }]
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
        ].map(route=>({
            title:route,link:`/hooks/${route}`
        }))
    },
    {
        title: 'Effect',
        children: ['useDebounceFn', 'useThrottleFn', 'useUpdateEffect'].map(route=>({
            title:route,link:route
        }))
    },
    {
        title: '进阶',
        children: ['useLatest', 'useMemoizedFn'].map(route=>({
            title:route,link:route
        }))
    },
];
