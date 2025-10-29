


const Errorfallback = ({ error }) => {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div className="alert alert-warning">
        Oups!  plus de 7 résultat !
    </div>
  );
}

export default Errorfallback;
