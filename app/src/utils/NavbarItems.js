export const STYLES = {
    DEFAULT: 0,
    DOWNLOAD: 1
}

export const Items = [
    {
        label: 'Home',
        url: '/',
        active: false,
        newTab: false,
        style: STYLES.DEFAULT
    },
    {
        label: 'Documentation [WIP]',
        url: '/docs',
        active: false,
        newTab: true,
        style: STYLES.DEFAULT
    },
    {
        label: 'Source Code',
        url: '/github',
        active: false,
        newTab: true,
        style: STYLES.DEFAULT
    },
    {
        label: 'Discord',
        url: '/discord',
        active: false,
        newTab: true,
        style: STYLES.DEFAULT
    },
    {
        label: 'Donate',
        url: '/donate',
        active: false,
        newTab: true,
        style: STYLES.DEFAULT
    },
    {
        label: 'Download Now',
        url: '/download',
        active: false,
        newTab: false,
        style: STYLES.DOWNLOAD
    }
]