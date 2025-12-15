import "../../style/header/category.css";

const DevOps = () => {
  return (
    <div className="category-container">
      <section className="category-grid">
        <div className="category-card first-row">
          <h2>CLOUD</h2>
          <ul>
            <li>AWS</li>
            <li>GCP</li>
            <li>OCI</li>
            <li>SCP</li>
            <li>NCP</li>
          </ul>
        </div>

        <div className="category-card first-row">
          <h2>Management</h2>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>Jenkins</li>
          </ul>
        </div>

        <div className="category-card first-row">
          <h2>WebServer</h2>
          <ul>
            <li>Apache</li>
            <li>Tomcat</li>
            <li>Nginx</li>
          </ul>
        </div>
        <div className="category-card first-row">
          <h2>Container</h2>
          <ul>
            <li>Docker</li>
            <li>Kubernetes</li>
          </ul>
        </div>
        <div className="category-card">
          <h2>OS</h2>
          <ul>
            <li>Linux</li>
            <li>Windows</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default DevOps;
