import { Routes } from "../Routes/Routes";
import { AiOutlineFolderOpen } from 'react-icons/ai';
import { Images } from "./Images";

export const sidebarContent = [
    { 
        id: 0, item: 'Wallet', route: Routes.wallet, 
        icon: <AiOutlineFolderOpen className="text-orange font-28px mr-2 ml-4" /> 
    }
];