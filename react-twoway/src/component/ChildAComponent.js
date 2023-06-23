export default function ChildAComponent(props) {

  const handleChange = (event) => {
    props.changeData(event.target.value);
  };

  return (
    <form>
      <input type="text" onChange={handleChange} />
    </form>
  );
}