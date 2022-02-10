const Category = (props) => {
    return (
      <div>
        <h2>Category:</h2>
        <p>{props.questionObject.category.title}</p>
      </div>
    )
  }

  export default Category;