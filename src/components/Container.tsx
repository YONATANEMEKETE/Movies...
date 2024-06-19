type containerProp = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: containerProp) => {
  return (
    <div className={`${className} max-w-[1100px] mx-auto`}>{children}</div>
  );
};

export default Container;
