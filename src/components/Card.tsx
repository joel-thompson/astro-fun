export interface Props {
  title: string;
  body: string;
  href: string;
}

// set up styled component

const Card = ({ title, body, href }: Props) => {
  <li>
    <a href={href}>
      <h2>
        {title}
        <span>&rarr;</span>
      </h2>
      <p>{body}</p>
    </a>
  </li>;
};
