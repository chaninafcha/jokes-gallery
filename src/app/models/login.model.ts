export interface Joke {
    category: string;
    type: string;
    setup: string;
    joke:string;
    delivery?: string; // Optional property for 'twopart' jokes
    flags: {
      nsfw: boolean;
      religious: boolean;
      political: boolean;
      racist: boolean;
      sexist: boolean;
    };
    id: number;
    error: boolean;
  }

  export interface JokeMainDetails{
    id:number;
    name:string;
  }