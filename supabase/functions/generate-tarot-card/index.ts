import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { title, category, element } = await req.json();

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // Element-driven palette hints to keep variety while staying cohesive
    const palettes: Record<string, string> = {
      fire: "warm terracotta, burnt orange, deep red, golden ochre, cream background",
      water: "teal, soft blue, coral red accents, off-white background",
      earth: "sage green, mossy olive, dusty rose, muted cream background",
      air: "dusty lavender, soft violet, pale gold, parchment background",
      spirit: "muted indigo, antique gold, terracotta accents, cream background",
    };

    // Vintage tarot illustration prompt — full-bleed art with the title word
    // integrated into a banner inside the card itself (not overlaid by UI).
    const prompt = `A vintage hand-drawn tarot card illustration, vertical 3:4 portrait composition, full-bleed artwork that fills the entire frame. The card features an expressive, charming cat as the central character — stylized in a vintage woodcut / linocut / Art Nouveau storybook style with bold black inked outlines, hand-textured shading, slight paper grain, and subtly aged edges. The cat embodies the concept of "${title}" through its pose, expression, and the symbolic objects around it (props, plants, herbs, flowers, celestial elements relevant to "${title}"). 

Surround the scene with an ornate decorative border featuring botanical and mystical motifs (vines, flowers, sacred geometry, small symbols). At the bottom of the card, integrate a horizontal scroll/banner ribbon containing ONLY the single word "${title.toUpperCase()}" in bold vintage serif typography (clean, large, perfectly spelled — no extra letters, no typos, no other words anywhere on the card).

Color palette: ${palettes[element] || palettes.spirit}. Slightly desaturated, vintage printed look with risograph / screen-print texture. NO modern UI elements, NO photographs, NO digital gradients — pure hand-illustrated tarot art. The composition should feel like a single complete antique tarot card you could hold in your hand. Ultra detailed, high resolution, centered composition.`;

    console.log("Generating tarot card image for:", title);

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash-image-preview",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        modalities: ["image", "text"],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Usage limit reached. Please check your Lovable AI credits." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    console.log("AI response received");

    const imageUrl = data.choices?.[0]?.message?.images?.[0]?.image_url?.url;

    if (!imageUrl) {
      console.error("No image in response:", JSON.stringify(data));
      throw new Error("No image generated");
    }

    return new Response(
      JSON.stringify({ imageUrl }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error generating tarot card:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Failed to generate card" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
