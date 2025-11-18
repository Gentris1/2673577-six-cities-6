import './spinner.css';

type SpinnerProps = {
  size?: number;
  color?: string;
};

export function Spinner({size = 80, color = '#ff6b6b'} : SpinnerProps){
  return (
    <div className="spinner-container">
      <div
        className="spinner"
        style={{
          width: size,
          height: size,
          borderTopColor: color,
          borderWidth: size / 8,
        }}
      />
    </div>
  );
}
