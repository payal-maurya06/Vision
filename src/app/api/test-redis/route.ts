import redis from "../../../../lib/redis";

export async function GET() {
  try {
    // Test SET
    await redis.set("test-key", "hello-redis", "EX", 60);

    // Test GET
    const value = await redis.get("test-key");

    return Response.json({
      message: "Redis working!",
      storedValue: value,
    });
  } catch (err) {
    return Response.json({ error: String(err) });
  }
}
