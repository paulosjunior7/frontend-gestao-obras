
import React, {
    useEffect,
    useRef,
    useState,
    useCallback,
    InputHTMLAttributes,
    ChangeEvent
} from 'react';

import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { Container, Error } from './styles';
import { useField } from '@unform/core';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ComponentType<IconBaseProps>;
    showPlaceHolder?: boolean;
    currency?: boolean;
}

const Input: React.FC<InputProps> = ({
    name,
    icon: Icon,
    placeholder,
    currency,
    showPlaceHolder,
    ...rest
}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { fieldName, defaultValue, error, registerField } = useField(String(name));

    useEffect(() => {

        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, registerField])

    const [isFocused, setIsFocused] = useState(!!inputRef.current?.value);
    const [isFilled, setIsFilled] = useState(!!inputRef.current?.value);

    useEffect(() => {
        setIsFocused(!!inputRef.current?.value);
        setIsFilled(!!inputRef.current?.value)
        // inputRef.current?.value === inputRef.current?.value.toUpperCase();
    }, [inputRef.current?.value])

    const handleInputBlur = useCallback(() => {
        setIsFocused(!!inputRef.current?.value);
        setIsFilled(!!inputRef.current?.value)
        formatCurrency(inputRef, 'blur');
    }, [])


    function formatNumber(n: string) {
        // format number 1000000 to 1,234,567
        return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }


    function formatCurrency(input: any, blur: string = "") {
        if (!currency) {
            return;
        }
        // appends $ to value, validates decimal side
        // and puts cursor back in right position.

        // get input value
        var input_val = input.val();

        // don't validate empty input
        if (input_val === "") { return; }

        // original length
        var original_len = input_val.length;

        // initial caret position 
        var caret_pos = input.prop("selectionStart");

        // check for decimal
        if (input_val.indexOf(",") >= 0) {

            // get position of first decimal
            // this prevents multiple decimals from
            // being entered
            var decimal_pos = input_val.indexOf(".");

            // split number by decimal point
            var left_side = input_val.substring(0, decimal_pos);
            var right_side = input_val.substring(decimal_pos);

            // add commas to left side of number
            left_side = formatNumber(left_side);

            // validate right side
            right_side = formatNumber(right_side);

            // On blur make sure 2 numbers after decimal
            if (blur === "blur") {
                right_side += "00";
            }

            // Limit decimal to only 2 digits
            right_side = right_side.substring(0, 2);

            // join number by .
            input_val = "$" + left_side + "." + right_side;

        } else {
            // no decimal entered
            // add commas to number
            // remove all non-digits
            input_val = formatNumber(input_val);
            input_val = "$" + input_val;

            // final formatting
            if (blur === "blur") {
                input_val += ".00";
            }
        }

        // send updated string to input
        input.val(input_val);

        // put caret back in the right position
        var updated_len = input_val.length;
        caret_pos = updated_len - original_len + caret_pos;
        input[0].setSelectionRange(caret_pos, caret_pos);
    }




    return (
        <Container
            isFocused={isFocused}
            isFilled={isFilled}
            isErrored={!!error}
            restType={rest.type}
        >
            {Icon && <Icon size={20} />}

            {
                showPlaceHolder === true || showPlaceHolder === undefined ? (
                    <>
                        <label>{placeholder}</label>
                        <input
                            {...rest}
                            defaultValue={defaultValue}
                            onFocus={() => setIsFocused(true)}
                            onKeyUp={() => formatCurrency(inputRef)}
                            onBlur={handleInputBlur}
                            ref={inputRef}
                            autoComplete="no"

                        //     value.target.value = rest.type != "email" ? value.target.value.toUpperCase() : value.target.value;
                        //     if (rest.onChange) {
                        //         rest.onChange(value);
                        //     }
                        // }}
                        />
                    </>
                ) : (
                    <input
                        {...rest}
                        defaultValue={defaultValue}
                        onFocus={() => setIsFocused(true)}
                        onBlur={handleInputBlur}
                        onKeyUp={() => formatCurrency(inputRef)}
                        placeholder={placeholder}
                        ref={inputRef}
                        autoComplete="no"

                    />
                )
            }


            {error &&
                <Error title={error}>
                    <FiAlertCircle color="#c53030" size={20} />
                </Error>}
        </Container>
    )
}

export default Input;