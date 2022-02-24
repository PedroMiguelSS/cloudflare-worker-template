const HelloWorld = async (request: Request): Promise<Response> => {
    return new Response('Hello World');
};

export default HelloWorld;
