export const SEARCH_INDEX = [
  {
    "title": "",
    "headers": [
      {
        "level": 2,
        "title": "Overview",
        "slug": "overview",
        "link": "#overview",
        "children": []
      },
      {
        "level": 2,
        "title": "Indicator",
        "slug": "indicator",
        "link": "#indicator",
        "children": []
      },
      {
        "level": 2,
        "title": "Data",
        "slug": "data",
        "link": "#data",
        "children": []
      }
    ],
    "path": "/get-started.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "BrightSpace",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [
      {
        "level": 2,
        "title": "bar in sub2",
        "slug": "bar-in-sub2",
        "link": "#bar-in-sub2",
        "children": []
      }
    ],
    "path": "/sub2/bar.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Foo in sub2",
    "headers": [],
    "path": "/sub2/foo.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [
      {
        "level": 2,
        "title": "Test 0",
        "slug": "test-0",
        "link": "#test-0",
        "children": []
      },
      {
        "level": 2,
        "title": "Test 1",
        "slug": "test-1",
        "link": "#test-1",
        "children": [
          {
            "level": 3,
            "title": "Test 1.1",
            "slug": "test-1-1",
            "link": "#test-1-1",
            "children": []
          }
        ]
      }
    ],
    "path": "/baz/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [
      {
        "level": 2,
        "title": "Bar in sub1",
        "slug": "bar-in-sub1",
        "link": "#bar-in-sub1",
        "children": []
      }
    ],
    "path": "/sub1/bar.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [
      {
        "level": 2,
        "title": "Foo in sub1",
        "slug": "foo-in-sub1",
        "link": "#foo-in-sub1",
        "children": []
      }
    ],
    "path": "/sub1/foo.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Markdown Extension Examples",
    "headers": [
      {
        "level": 2,
        "title": "Syntax Highlighting",
        "slug": "syntax-highlighting",
        "link": "#syntax-highlighting",
        "children": []
      },
      {
        "level": 2,
        "title": "Custom Containers",
        "slug": "custom-containers",
        "link": "#custom-containers",
        "children": []
      },
      {
        "level": 2,
        "title": "Emoji",
        "slug": "emoji",
        "link": "#emoji",
        "children": []
      },
      {
        "level": 2,
        "title": "More",
        "slug": "more",
        "link": "#more",
        "children": []
      }
    ],
    "path": "/examples/examples.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
