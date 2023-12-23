import React from "react";
import { Space, Typography } from "antd";
import { useController } from "react-hook-form";
import { RenderIf } from "@/shared/components";
import { IProps } from "./models";
import classes from "./Input.module.scss";

const FormInput: React.FC<IProps> = ({
    name,
    control,
    placeholder,
    errors = {},
    label,
    disabled = false,
    className = "",
    type,
    ...props
}) => {
    // const { field } = useController({ name, control });

    let isErrorContain = false;

    if (name.includes(".") && Object.keys(errors).length) {
        const arr = name.split(".");
        isErrorContain = Object.hasOwn(
            errors[arr.at(0) as string] || {},
            arr.at(1) || ""
        );
    } else {
        isErrorContain = Object.hasOwn(errors, name);
    }

    return (
        <div className={classes.inputMain}>
            <Space
                direction="vertical"
                size="small"
                style={{ display: "flex" }}
            >
                <RenderIf condition={label}>
                    <Typography.Text strong>{label}</Typography.Text>
                </RenderIf>
                <input
                    type={type}
                    autoComplete="off"
                    className={`w-100 mb-3 form-control input-style ${className} ${
                        isErrorContain ? "error-input" : ""
                    }`}
                    placeholder={placeholder}
                    {...props}
                    // {...field}
                    disabled={disabled}
                />
            </Space>
        </div>
    );
};

export default FormInput;
