async function fetchAPI(query, { variables, preview } = {}) {
  const res = await fetch("https://gapi.storyblok.com/v1/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Token: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
      Version: preview ? "draft" : "published",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

export async function getAllStories() {
  return await fetchAPI(
    `
    {
  PageItems(per_page: 100) {
    total
    items {
      id
      name
      created_at
      published_at
      uuid
      slug
      full_slug
      is_startpage
      parent_id
      group_id
      content {
        _editable
        _uid
        body
        component
      }
    }
  }
}
`,
    {
      preview: true,
      variables: {},
    }
  );
}

export async function getAllPublishedStoriesSlugs() {
  return await fetchAPI(
    `
        {
  PageItems(per_page: 100) {
    total
    items {
      full_slug,
      path
    }
  }
}
`,
    {
      version: "published",
      variables: {},
    }
  );
}

export async function getAllLanguageCodes() {
  return await fetchAPI(
    `
        {
  Space {
    languageCodes
  }
}
`,
    {
      version: "published",
      variables: {},
    }
  );
}

export async function getAllStoriesSlugs() {
  return await fetchAPI(
    `
        {
  PageItems(per_page: 100) {
    total
    items {
      full_slug,
    }
  }
}
`,
    {
      variables: {},
    }
  );
}

export async function getAllSettings() {
  return await fetchAPI(
    `
        {
  SettingsItems {
    total
    items {
      id
      name
      created_at
      published_at
      uuid
      slug
      full_slug
      is_startpage
      parent_id
      group_id
      content {
        _editable
        _uid
        component
        main_nav 
      }
    }
  }
}

        `,
    {
      variables: {},
    }
  );
}
