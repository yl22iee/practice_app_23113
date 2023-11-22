export const Detail = () => {
  const obj1 = {
    id: 1,
    name: "james",
    age: 3 + "years",
    habit: "rocket",
  };

  // console.log(obj1.id);
  // console.log(obj1.name);
  // console.log(obj1.age);
  // console.log(obj1.habit);

  const { id: objid } = obj1;
  console.log(objid);

  return <div>hello world!</div>;
};
