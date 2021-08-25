import { Routes } from "../Routes/Routes";
import { AiOutlineFolderOpen } from 'react-icons/ai';
import { Images } from "./Images";

export const sidebarContent = [
    { 
        id: 0, item: 'Wallet', route: Routes.wallet, 
        icon: <AiOutlineFolderOpen className="text-orange font-28px mr-2 ml-4" /> 
    }
];

export const coinsData = [
    {
        id: 1,
        img: Images.icon,
        title: 'Ethereum',
        subTitle: 'ETH',
        price: '$172.46',
        hChange: '+1.29%',
        balance: '8.3612 ETH',
        value: '$1463.49',
        portfolio: '70.11%'
    },
    {
        id: 2,
        img: Images.bitcoin,
        title: 'Bitcoin',
        subTitle: 'BTC',
        price: '$172.46',
        hChange: '+1.29%',
        balance: '8.3612 ETH',
        value: '$1463.49',
        portfolio: '70.11%'
    },
    {
        id: 3,
        img: Images.dash,
        title: 'Dash',
        subTitle: 'DASH',
        price: '$172.46',
        hChange: '+1.29%',
        balance: '8.3612 ETH',
        value: '$1463.49',
        portfolio: '70.11%'
    }
];