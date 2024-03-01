/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CreateTeamFormInputValues = {
    name?: string;
    league?: string;
    ageGroup?: string;
    location?: string;
    email?: string;
    phoneNumber?: string;
    website?: string;
};
export declare type CreateTeamFormValidationValues = {
    name?: ValidationFunction<string>;
    league?: ValidationFunction<string>;
    ageGroup?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phoneNumber?: ValidationFunction<string>;
    website?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateTeamFormOverridesProps = {
    CreateTeamFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    league?: PrimitiveOverrideProps<TextFieldProps>;
    ageGroup?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
    website?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CreateTeamFormProps = React.PropsWithChildren<{
    overrides?: CreateTeamFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CreateTeamFormInputValues) => CreateTeamFormInputValues;
    onSuccess?: (fields: CreateTeamFormInputValues) => void;
    onError?: (fields: CreateTeamFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CreateTeamFormInputValues) => CreateTeamFormInputValues;
    onValidate?: CreateTeamFormValidationValues;
} & React.CSSProperties>;
export default function CreateTeamForm(props: CreateTeamFormProps): React.ReactElement;