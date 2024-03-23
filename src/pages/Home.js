const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
    margin: '10px',
  },
  img: {
    borderRadius: '40px',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Contacts manager welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>

      <img
        style={styles.img}
        src="https://cdn.pixabay.com/photo/2015/01/25/21/02/phone-612061_960_720.jpg"
        alt="welcome page"
      />
    </div>
  );
}
