/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Pet } from "../models";
import { ButtonProps, FlexProps, ImageProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PetAddOverridesProps = {
    PetAdd?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile29766913"?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile29766916"?: PrimitiveOverrideProps<TextProps>;
    MyIcon?: MyIconProps;
    Profile?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TextField29766922?: PrimitiveOverrideProps<TextFieldProps>;
    TextField29766923?: PrimitiveOverrideProps<TextFieldProps>;
    TextField29766924?: PrimitiveOverrideProps<TextFieldProps>;
    TextField38624677?: PrimitiveOverrideProps<TextFieldProps>;
    TextField38624684?: PrimitiveOverrideProps<TextFieldProps>;
    TextField38624691?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 437"?: PrimitiveOverrideProps<FlexProps>;
    Button38624708?: PrimitiveOverrideProps<ButtonProps>;
    Button29766926?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type PetAddProps = React.PropsWithChildren<Partial<FlexProps> & {
    pet?: Pet;
} & {
    overrides?: PetAddOverridesProps | undefined | null;
}>;
export default function PetAdd(props: PetAddProps): React.ReactElement;
