import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const body = formData.get('body');
    const file = formData.get('file');

    if (!(file instanceof File) && file !== null) {
      // If a file is provided but is not a valid File object, return error
      return new Response(
        JSON.stringify({ error: 'No valid file uploaded or invalid file format' }),
        { status: 400 }
      );
    }



    // Send email with Resend API
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [email],
      subject: subject as string,
      html: `
        <div>
          <h1>Hello, ${name}</h1>
          <p>${body}</p>
        </div>
      `,
    });
  
    if (error) {
      return new Response(
        JSON.stringify({ error: error.message || 'Unknown error' }),
        { status: 500 }
      );
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message || 'Something went wrong' }),
      { status: 500 }
    );
  }
}
