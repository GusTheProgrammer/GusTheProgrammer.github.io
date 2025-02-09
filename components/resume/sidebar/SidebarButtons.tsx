import { Download } from "lucide-react";
import { Button } from "@heroui/react";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

interface ButtonsProps {
    handlePrint: () => void;
}

export const SidebarButtons = ({ handlePrint }: ButtonsProps) => {
    return (
        <div className='px-4 flex gap-3 border-t p-4'>
            <Button onPress={handlePrint} variant="bordered" size="sm" className="w-1/2">
                <Download className="h-4 w-4 mr-2"/>
                Export PDF
            </Button>
            <ThemeSwitcher />
        </div>
    )
}