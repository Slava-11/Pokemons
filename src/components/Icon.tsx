import c from "classnames";

type IconProps = {
  children: JSX.Element,
  className?: string,
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

export const Icon = ({children, className, onClick}: IconProps) => {
  const combinedClassName = c(
    "text-[30px] absolute",
    className
  );
  return (
    <div className={combinedClassName} onClick={onClick}>{children}</div>
  )
}
