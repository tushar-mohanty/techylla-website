export async function POST(req) {
    try {
        const body = await req.json();

        const response = await fetch(
            "https://api.hsforms.com/submissions/v3/integration/submit/245721089/2d512c76-1898-499f-a646-13ff510d1f49",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fields: [
                        { name: "firstname", value: body.firstname },
                        { name: "lastname", value: body.lastname },
                        { name: "email", value: body.email },
                        { name: "phone", value: body.phone },
                        { name: "company", value: body.company },
                        { name: "message", value: body.message },
                    ],
                }),
            }
        );

        const data = await response.json();

        return Response.json({ success: true, data });
    } catch (error) {
        console.error(error);
        return Response.json({ success: false });
    }
}