const getDatabaseUrl = (nodeEnv) => {
  return (
    {
      development: "postgres://postgres:postgres@localhost:5432/breakable-toy-deliverable-2_development",
      test: "postgres://postgres:postgres@localhost:5432/breakable-toy-deliverable-2_test",
      e2e: "postgres://postgres:postgres@localhost:5432/breakable-toy-deliverable-2_e2e",
    }[nodeEnv] || process.env.DATABASE_URL
  );
};

module.exports = getDatabaseUrl;
