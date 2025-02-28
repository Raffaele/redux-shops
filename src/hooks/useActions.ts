import { useDispatch } from "react-redux";

export const useActions = <T extends Record<string, (...args: any[]) => any>>(actions: T) => {
  const dispatch = useDispatch();

  return Object.fromEntries(
    Object.keys(actions).map((key) => [
      key,
      (...args: Parameters<T[keyof T]>) => dispatch(actions[key](...args)),
    ])
  ) as { [K in keyof T]: (...args: Parameters<T[K]>) => void };
};