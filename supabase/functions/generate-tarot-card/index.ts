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

    // Create a detailed prompt for a mystical tarot-style cat card
    const elementDescriptions: Record<string, string> = {
      fire: "warm golden and orange tones, flames, radiant energy",
      water: "flowing blues and teals, waves, serene reflections",
      earth: "rich greens and browns, crystals, grounding stones",
      air: "soft purples and whites, clouds, ethereal light",
      spirit: "mystical violets and golds, stars, celestial energy",
    };

    const prompt = `A mystical tarot card illustration featuring an elegant cat as the central figure. The cat embodies the concept of "${title}" (${category}). The art style is ornate Art Nouveau mixed with mystical tarot aesthetics. The cat has expressive, wise eyes and is surrounded by ${elementDescriptions[element] || 'mystical symbols and cosmic energy'}. Include decorative borders with sacred geometry patterns, moon phases, and stars. The overall mood is spiritual, magical, and empowering. Rich jewel tones with gold accents. Vertical composition perfect for a tarot card. Ultra high resolution.`;

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

    // Extract the image from the response
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
