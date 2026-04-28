import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase/client';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      client_name,
      client_email,
      client_phone,
      municipality,
      soil_profile,
      engineering_focus,
      is_sloped_lot,
      quoted_min_price,
      quoted_max_price,
    } = body;

    // Basic server-side validation
    if (!client_name || !client_email || !municipality || !soil_profile || !engineering_focus) {
      return NextResponse.json(
        { error: 'Missing required fields.' },
        { status: 400 }
      );
    }

    const { error } = await supabase.from('leads').insert({
      client_name,
      client_email,
      client_phone: client_phone || null,
      municipality,
      soil_profile,
      engineering_focus,
      is_sloped_lot: is_sloped_lot ?? false,
      quoted_min_price,
      quoted_max_price,
      status: 'new_lead',
    });

    if (error) {
      console.error('[Supabase Insert Error]', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('[API Route Error]', err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
