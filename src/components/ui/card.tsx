import React from 'react';

export function Card(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div className="card" {...props} />;
}

export function CardFooter(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div className="card-footer" {...props} />;
}

export function CardHeader(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div className="card-header" {...props} />;
}

export function CardTitle(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h2 className="card-title" {...props} />;
}

export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div className="card-content" {...props} />;
}

 
