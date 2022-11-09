export const BUTTON_TYPES = {
	primary: 'primary',
	secondary: 'secondary',
	action: 'action',
};

const Button = ({
	color = 'primary',
	children = 'Button',
	type = 'button',
	className = '',
	...rest
}) => {
	switch (color) {
		case BUTTON_TYPES.primary:
			return (
				<button
					className={`bg-primary text-text flex-1 px-5 py-2 rounded-md text-md font-medium hover:bg-action transition-all active:opacity-80 disabled:bg-slate-900 ${className}`}
					type={type}
					{...rest}
				>
					{children}
				</button>
			);
		case BUTTON_TYPES.secondary:
			return (
				<button
					className={`border-primary border-2 text-text flex-1 px-5 py-2 rounded-md text-md font-medium hover:bg-action transition-all active:opacity-80 disabled:bg-slate-900 ${className}`}
					type={type}
					{...rest}
				>
					{children}
				</button>
			);
	}
};

export default Button;
