export default function Card({ as: Tag = 'div', hover = false, className = '', children, ...rest }) {
  return (
    <Tag
      className={`panel ${hover ? 'panel-hover' : ''} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
