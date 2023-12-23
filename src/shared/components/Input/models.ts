import { FieldErrorsImpl, UseControllerProps } from "react-hook-form";

export interface IProps {
    name: string;
    errors?: Partial<
        FieldErrorsImpl<{
            [x: string]: any;
        }>
    >;
    type: "text" | "number" | "radio" | "date" | "numeric";
    placeholder?: string;
    disabled?: boolean;
    classNameSpan?: string;
    className?: string;
    label: string;
    control?: UseControllerProps["control"];
}
