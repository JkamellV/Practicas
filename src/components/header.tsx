interface HeaderProps {
  children: JSX.Element;
}

export const Header = ({ children }: HeaderProps) => {
  return (
    <div>
      <p>header</p>
      {children}
    </div>
  );
};
