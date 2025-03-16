interface InputProps {
  label: string;
  id: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const Input = (props: InputProps) => {
  return (
	<div class="rounded-md shadow-sm">
      <label for={props.id} class="sr-only">
        {props.label}
      </label>
      <input
        id={props.id}
        name={props.name}
        type={props.type}
        autocomplete="off"
        required
        class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        placeholder={props.placeholder}
        value={props.value}
        onInput={(e) => props.onChange(e.currentTarget.value)}
      />
    </div>
  );
};

export default Input;
