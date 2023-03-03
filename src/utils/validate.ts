export default function validate(validatablaInput: Validatable) {
	let isValid = true;
	if (validatablaInput.required) {
		isValid = isValid && validatablaInput.value.toString().trim().length !== 0;
	}

	if (
		validatablaInput.minLength != null &&
		typeof validatablaInput.value === "string"
	) {
		isValid =
			isValid && validatablaInput.value.length >= validatablaInput.minLength;
	}

	if (
		validatablaInput.maxLength != null &&
		typeof validatablaInput.value === "string"
	) {
		isValid =
			isValid && validatablaInput.value.length <= validatablaInput.maxLength;
	}

	if (
		validatablaInput.min != null &&
		typeof validatablaInput.value === "number"
	) {
		isValid = isValid && validatablaInput.value >= validatablaInput.min;
	}

	if (
		validatablaInput.max != null &&
		typeof validatablaInput.value === "number"
	) {
		isValid = isValid && validatablaInput.value <= validatablaInput.max;
	}

	return isValid;
}
