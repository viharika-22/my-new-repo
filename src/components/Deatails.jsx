import { useParams } from 'react-router-dom';
import componentsMap from '../componentsMap';
import NotFoundFallback from './NotFoundFallback';
import Loader from './Loader';
import { Suspense } from 'react';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',   // horizontal center
    alignItems: 'center',       // vertical center
    height: '80vh',             // fill most of viewport height
    padding: '20px',
    boxSizing: 'border-box',
    flexDirection: 'column',    // in case your component has multiple elements stacked
    textAlign: 'center',
  }
};

function Deatails() {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title).toLowerCase();

  const ComponentToRender = componentsMap[decodedTitle];

  if (!ComponentToRender) {
    return (
      <NotFoundFallback />
    );
  }

  console.log("Decoded title:", decodedTitle);
  console.log("Component to render:", componentsMap[decodedTitle]);
  console.log("Map keys:", Object.keys(componentsMap));

  return (
    <Suspense fallback={<Loader />}>
      <div style={styles.container}>
        <ComponentToRender />
      </div>
    </Suspense>
  );
}

export default Deatails;
