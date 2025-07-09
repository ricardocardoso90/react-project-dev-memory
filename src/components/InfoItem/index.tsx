import "./styles.css";

type Props = {
  label: string;
  value: string;
};

export const InfoItem = ({ label, value }: Props) => {
  return (
    <div className="container-info">
      <div className="label-info">{label}</div>
      <div className="value-info">
        <h1>{value}</h1>
      </div>
    </div>
  );
};
