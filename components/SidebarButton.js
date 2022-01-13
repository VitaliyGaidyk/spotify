import
{
    HeartIcon,
    HomeIcon,
    LibraryIcon,
    PlusCircleIcon,
    RssIcon,
    SearchIcon
} from "@heroicons/react/outline";
import {signOut} from "next-auth/react";
import Link from 'next/link'

const SidebarButton = ({id}) => {
    switch (id) {
        case 'home':
            return (
                <Link href='/'>
                    <button className="flex items-center space-x-2 hover:text-white">
                        <HomeIcon className="h-5 w-5"/>
                        <p>Home</p>
                    </button>
                </Link>
            )
        case 'search':
            return (
                <Link href="/search">
                    <button className="flex items-center space-x-2 hover:text-white">
                        <SearchIcon className="h-5 w-5"/>
                        <p>Search</p>
                    </button>
                </Link>
            )
        case 'library':
            return (
                <Link href="/collections/playlists">
                    <button className="flex items-center space-x-2 hover:text-white">
                        <LibraryIcon className="h-5 w-5"/>
                        <p>Your library</p>
                    </button>
                </Link>

            )
        case 'playlist':
            return (
                <button className="flex items-center space-x-2 hover:text-white">
                    <PlusCircleIcon className="h-5 w-5"/>
                    <p>Create Playlist</p>
                </button>
            )
        case 'heart':
            return (
                <button className="flex items-center space-x-2 hover:text-white">
                    <HeartIcon className="h-5 w-5"/>
                    <p>Liked Songs</p>
                </button>
            )
        case 'rss':
            return (
                <button className="flex items-center space-x-2 hover:text-white">
                    <RssIcon className="h-5 w-5"/>
                    <p>Your Episodes</p>
                </button>
            )
        case 'logout':
            return (
                <button onClick={() => signOut()} className="flex items-center space-x-2 hover:text-white">
                    <HomeIcon className="h-5 w-5"/>
                    <p>Log out</p>
                </button>
            )
        case 'logo':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" height="800" width="1200"
                     viewBox="-83.76405 -41.87075 725.9551 251.2245">
                    <path
                        d="M83.743 0C37.494 0 0 37.493 0 83.742c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738zm38.404 120.78a5.217 5.217 0 01-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 01-6.249-3.93 5.213 5.213 0 013.926-6.25c31.9-7.288 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.802c-1.89 3.072-5.91 4.042-8.98 2.152-22.51-13.836-56.823-17.843-83.448-9.761-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 014.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 015.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 012.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739zm94.56 3.072c-14.46-3.448-17.03-5.868-17.03-10.953 0-4.804 4.52-8.037 11.25-8.037 6.52 0 12.98 2.455 19.76 7.509.2.153.46.214.71.174a.933.933 0 00.63-.386l7.06-9.952a.95.95 0 00-.18-1.288c-8.07-6.473-17.15-9.62-27.77-9.62-15.61 0-26.52 9.369-26.52 22.774 0 14.375 9.41 19.465 25.67 23.394 13.83 3.187 16.17 5.857 16.17 10.629 0 5.29-4.72 8.58-12.32 8.58-8.44 0-15.33-2.85-23.03-9.51a.98.98 0 00-.69-.23c-.26.02-.49.14-.65.33l-7.92 9.42c-.33.4-.29.98.09 1.32 8.96 8 19.98 12.22 31.88 12.22 16.82 0 27.69-9.19 27.69-23.42.03-12.007-7.16-18.657-24.77-22.941zm62.86-14.26c-7.29 0-13.27 2.872-18.21 8.757v-6.624a.945.945 0 00-.94-.949h-12.95c-.52 0-.94.426-.94.949v73.601c0 .52.42.95.94.95h12.95c.52 0 .94-.43.94-.95v-23.23c4.94 5.53 10.92 8.24 18.21 8.24 13.55 0 27.27-10.43 27.27-30.369.02-19.943-13.7-30.376-27.26-30.376zm12.21 30.375c0 10.149-6.25 17.239-15.21 17.239-8.85 0-15.53-7.41-15.53-17.239 0-9.83 6.68-17.238 15.53-17.238 8.81-.001 15.21 7.247 15.21 17.237zm50.21-30.375c-17.45 0-31.12 13.436-31.12 30.592 0 16.972 13.58 30.262 30.91 30.262 17.51 0 31.22-13.39 31.22-30.479 0-17.031-13.62-30.373-31.01-30.373zm0 47.714c-9.28 0-16.28-7.46-16.28-17.344 0-9.929 6.76-17.134 16.07-17.134 9.34 0 16.38 7.457 16.38 17.351 0 9.927-6.8 17.127-16.17 17.127zm68.27-46.53h-14.25V49.664a.944.944 0 00-.94-.948h-12.95c-.52 0-.95.426-.95.948V64.23h-6.22c-.52 0-.94.426-.94.949v11.127c0 .522.42.949.94.949h6.22v28.795c0 11.63 5.79 17.53 17.22 17.53 4.64 0 8.49-.96 12.12-3.02.3-.16.48-.48.48-.82v-10.6c0-.32-.17-.63-.45-.8a.918.918 0 00-.92-.04c-2.49 1.25-4.9 1.83-7.6 1.83-4.15 0-6.01-1.89-6.01-6.11V77.26h14.25c.52 0 .94-.426.94-.949V65.185a.918.918 0 00-.93-.949zm49.64.057v-1.789c0-5.263 2.02-7.61 6.54-7.61 2.7 0 4.87.536 7.3 1.346.3.094.61.047.85-.132a.94.94 0 00.39-.77v-10.91a.937.937 0 00-.67-.909c-2.56-.763-5.84-1.546-10.76-1.546-11.95 0-18.28 6.734-18.28 19.467v2.74h-6.22c-.52 0-.95.426-.95.948v11.184c0 .522.43.949.95.949h6.22v44.405c0 .53.43.95.95.95h12.94c.53 0 .95-.42.95-.95V77.258h12.09l18.52 44.402c-2.1 4.66-4.17 5.59-6.99 5.59-2.28 0-4.69-.68-7.14-2.03a1.03 1.03 0 00-.75-.07c-.25.09-.46.27-.56.51l-4.39 9.63c-.21.46-.03.99.41 1.23 4.58 2.48 8.71 3.54 13.82 3.54 9.56 0 14.85-4.46 19.5-16.44l22.46-58.037a.925.925 0 00-.1-.881.924.924 0 00-.77-.412h-13.48c-.41 0-.77.257-.9.636l-13.81 39.434-15.12-39.46a.944.944 0 00-.88-.61h-22.12zm-28.78-.057h-12.95c-.52 0-.95.426-.95.949v56.481c0 .53.43.95.95.95h12.95c.52 0 .95-.42.95-.95V65.183a.947.947 0 00-.95-.949zm-6.4-25.719c-5.13 0-9.29 4.152-9.29 9.281a9.289 9.289 0 009.29 9.289c5.13 0 9.28-4.157 9.28-9.289 0-5.128-4.16-9.281-9.28-9.281zm113.42 43.88c-5.12 0-9.11-4.115-9.11-9.112s4.04-9.159 9.16-9.159 9.11 4.114 9.11 9.107c0 4.997-4.04 9.164-9.16 9.164zm.05-17.365c-4.67 0-8.2 3.71-8.2 8.253 0 4.541 3.51 8.201 8.15 8.201 4.67 0 8.2-3.707 8.2-8.253 0-4.541-3.51-8.201-8.15-8.201zm2.02 9.138l2.58 3.608h-2.18l-2.32-3.31h-1.99v3.31h-1.82v-9.564h4.26c2.23 0 3.69 1.137 3.69 3.051.01 1.568-.9 2.526-2.21 2.905zm-1.54-4.315h-2.37v3.025h2.37c1.18 0 1.89-.579 1.89-1.514 0-.984-.71-1.511-1.89-1.511z"
                        fill="#1ED760"/>
                </svg>
            )
        case '404':
            return (
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <path
                        d="M30 0C13.4314 0 0 13.4314 0 30C0 46.5686 13.4314 60 30 60C46.5686 60 60 46.5686 60 30C60 13.4314 46.5686 0 30 0ZM44.6346 43.2461C44.4675 43.5452 44.243 43.8084 43.974 44.0207C43.705 44.2329 43.3968 44.3901 43.067 44.4831C42.7372 44.5762 42.3923 44.6033 42.052 44.5629C41.7118 44.5225 41.3828 44.4155 41.0839 44.2479C37.3441 42.1507 33.2113 40.8488 28.9446 40.4239C24.6689 39.984 20.3484 40.4315 16.2536 41.7386C15.5983 41.9361 14.8916 41.8683 14.2859 41.5497C13.6802 41.2311 13.2239 40.6872 13.0155 40.0353C12.807 39.3834 12.8631 38.6757 13.1716 38.0647C13.4801 37.4538 14.0163 36.9885 14.6646 36.7693C19.4411 35.2409 24.4823 34.7181 29.4707 35.2339C34.4487 35.7303 39.2705 37.2495 43.6339 39.6964C43.9328 39.8637 44.1958 40.0882 44.4079 40.3572C44.6199 40.6261 44.7769 40.9342 44.8699 41.2639C44.9628 41.5935 44.9898 41.9383 44.9495 42.2784C44.9091 42.6185 44.8021 42.9473 44.6346 43.2461ZM48.2282 34.1346C48.07 34.4385 47.8534 34.7081 47.591 34.9283C47.3285 35.1484 47.0252 35.3146 46.6984 35.4175C46.3717 35.5204 46.0279 35.5579 45.6866 35.5279C45.3454 35.4978 45.0134 35.4009 44.7096 35.2425C40.1053 32.8432 35.0849 31.3457 29.9186 30.8304C24.719 30.2897 19.464 30.7576 14.4418 32.2082C13.7769 32.3989 13.0635 32.318 12.4581 31.9834C11.8527 31.6488 11.4047 31.0877 11.2125 30.4232C11.0212 29.7584 11.1016 29.0449 11.4361 28.4394C11.7706 27.8338 12.3318 27.3859 12.9964 27.1939C18.6596 25.561 24.584 25.0325 30.4468 25.6371C36.2712 26.2201 41.9307 27.9096 47.1214 30.615C47.7347 30.9352 48.1958 31.4858 48.4033 32.1457C48.6109 32.8057 48.5479 33.5211 48.2282 34.1346V34.1346ZM49.5257 26.5543C49.1346 26.5543 48.7371 26.4664 48.3632 26.28C42.8937 23.5532 36.9738 21.8443 30.8925 21.2368C24.8013 20.6061 18.6461 21.0927 12.7296 22.6725C12.0691 22.8275 11.3741 22.7193 10.792 22.3706C10.21 22.0219 9.78655 21.4603 9.61155 20.8047C9.43655 20.1492 9.52372 19.4512 9.85458 18.8588C10.1854 18.2665 10.734 17.8262 11.3839 17.6314C17.9109 15.8911 24.7003 15.3541 31.4196 16.0468C38.1279 16.717 44.6582 18.6023 50.6914 21.6107C51.2167 21.8738 51.6378 22.3065 51.8867 22.8387C52.1356 23.3709 52.1976 23.9715 52.0628 24.5433C51.9279 25.1151 51.6041 25.6247 51.1437 25.9897C50.6833 26.3546 50.1132 26.5535 49.5257 26.5543Z"
                        fill="#1ED760"></path>
                </svg>
            )
        default:
            return null;
    }
};

export default SidebarButton;