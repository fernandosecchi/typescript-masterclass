//! You could use Value extends [] for liberal typing
function addDefaultPost<This, Value extends Post[]>(
  _target: undefined,
  _context: ClassFieldDecoratorContext<This, Value>
) {
  return function (initialValue: Value) {
    initialValue.push({
      title: "Defualt Title",
      content: "Default Content",
    });
    return initialValue;
  };
}

type Post = {
  title: string;
  content: string;
};

class Author {
  @addDefaultPost
  public posts: Post[] = [];

  constructor(public name: string) {}

  greet(greeting: string) {
    console.log(` ${greeting}, ${this.name}`);
  }
}

const author = new Author("Mark");
console.log(author.posts);
