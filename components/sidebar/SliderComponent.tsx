import { Slider } from "@heroui/react";

interface SliderProps {
    label: string;
    value: number;
    min: number;
    max: number;
    step: number;
    onChange: (event: number) => void;
    currentValue: string;
}

export const SliderComponent = ({ label, value, min, max, step, onChange, currentValue }: SliderProps) => {
    const handleChange = (event: number | number[]) => {
        if (Array.isArray(event)) {
            onChange(event[0]);
        }
    };

    return (
        <div className='mb-2'>
            <label className="flex justify-between text-sm font-medium text-[#5f6368]">
                {label}
                <span>{currentValue}</span>
            </label>
            <Slider
                className='py-2'
                defaultValue={[value]}
                aria-label={label}
                maxValue={max}
                minValue={min}
                step={step}
                onChange={handleChange}
            />
        </div>
    );
}