import React from "react";
import { IProps } from "./models";

const RenderIf: React.FC<IProps> = ({
    condition,
    children,
    renderElse = "",
}) => {
    if (condition) return <>{children}</>;
    return <>{renderElse}</>;
};

export default RenderIf;
