const LoadingSpinner = ({ fontSize = '2em', text }: { fontSize?: string; text?: string }) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <i className='pi pi-spinner pi-spin text-primary-700' style={{ fontSize: fontSize }} />
      {text && <p className='text-primary-600 mt-3'>{text}</p>}
    </div>
  );
};

export default LoadingSpinner;
