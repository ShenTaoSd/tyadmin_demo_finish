// @ts-nocheck
import { ApplyPluginsType, dynamic } from 'D:/ccbft_py_work/Study_Work/tyadmin_demo_finish/tyadmin/node_modules/@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/xadmin/login",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__UserLayout' */'D:/ccbft_py_work/Study_Work/tyadmin_demo_finish/tyadmin/src/layouts/UserLayout'), loading: require('@/components/PageLoading/index').default}),
    "routes": [
      {
        "name": "login",
        "path": "/xadmin/login",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__TyAdminBuiltIn__UserLogin' */'D:/ccbft_py_work/Study_Work/tyadmin_demo_finish/tyadmin/src/pages/TyAdminBuiltIn/UserLogin'), loading: require('@/components/PageLoading/index').default}),
        "exact": true
      }
    ]
  },
  {
    "path": "/xadmin/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__SecurityLayout' */'D:/ccbft_py_work/Study_Work/tyadmin_demo_finish/tyadmin/src/layouts/SecurityLayout'), loading: require('@/components/PageLoading/index').default}),
    "routes": [
      {
        "path": "/xadmin/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__BasicLayout' */'D:/ccbft_py_work/Study_Work/tyadmin_demo_finish/tyadmin/src/layouts/BasicLayout'), loading: require('@/components/PageLoading/index').default}),
        "authority": [
          "admin",
          "user"
        ],
        "routes": [
          {
            "name": "Home",
            "path": "/xadmin/index",
            "icon": "dashboard",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__TyAdminBuiltIn__DashBoard' */'D:/ccbft_py_work/Study_Work/tyadmin_demo_finish/tyadmin/src/pages/TyAdminBuiltIn/DashBoard'), loading: require('@/components/PageLoading/index').default}),
            "exact": true
          },
          {
            "path": "/xadmin/",
            "redirect": "/xadmin/index",
            "exact": true
          },
          {
            "name": "Authentication and Authorization",
            "icon": "BarsOutlined",
            "path": "/xadmin/auth",
            "routes": [
              {
                "name": "permission",
                "path": "/xadmin/auth/permission",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__AutoGenPage__PermissionList' */'D:/ccbft_py_work/Study_Work/tyadmin_demo_finish/tyadmin/src/pages/AutoGenPage/PermissionList'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              },
              {
                "name": "group",
                "path": "/xadmin/auth/group",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__AutoGenPage__GroupList' */'D:/ccbft_py_work/Study_Work/tyadmin_demo_finish/tyadmin/src/pages/AutoGenPage/GroupList'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              }
            ]
          },
          {
            "name": "Demo",
            "icon": "BarsOutlined",
            "path": "/xadmin/demo",
            "routes": [
              {
                "name": "全部字段非必填[被外键关联]",
                "path": "/xadmin/demo/demo_foreign_key",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__AutoGenPage__DemoForeignKeyList' */'D:/ccbft_py_work/Study_Work/tyadmin_demo_finish/tyadmin/src/pages/AutoGenPage/DemoForeignKeyList'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              },
              {
                "name": "标签[被多对多关联]",
                "path": "/xadmin/demo/tags",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__AutoGenPage__TagsList' */'D:/ccbft_py_work/Study_Work/tyadmin_demo_finish/tyadmin/src/pages/AutoGenPage/TagsList'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              },
              {
                "name": "分类[被外键关联]",
                "path": "/xadmin/demo/category",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__AutoGenPage__CategoryList' */'D:/ccbft_py_work/Study_Work/tyadmin_demo_finish/tyadmin/src/pages/AutoGenPage/CategoryList'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              },
              {
                "name": "富文本示例[关联外键，多对多标签]",
                "path": "/xadmin/demo/rich_text_demo",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__AutoGenPage__RichTextDemoList' */'D:/ccbft_py_work/Study_Work/tyadmin_demo_finish/tyadmin/src/pages/AutoGenPage/RichTextDemoList'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              },
              {
                "name": "下拉选择示例(choices)",
                "path": "/xadmin/demo/demo_model_require",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__AutoGenPage__DemoModelRequireList' */'D:/ccbft_py_work/Study_Work/tyadmin_demo_finish/tyadmin/src/pages/AutoGenPage/DemoModelRequireList'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              },
              {
                "name": "全部字段类型-必填",
                "path": "/xadmin/demo/demo_model",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__AutoGenPage__DemoModelList' */'D:/ccbft_py_work/Study_Work/tyadmin_demo_finish/tyadmin/src/pages/AutoGenPage/DemoModelList'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              },
              {
                "name": "全部字段类型-提供默认值",
                "path": "/xadmin/demo/demo_default_model",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__AutoGenPage__DemoDefaultModelList' */'D:/ccbft_py_work/Study_Work/tyadmin_demo_finish/tyadmin/src/pages/AutoGenPage/DemoDefaultModelList'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              },
              {
                "name": "用户管理",
                "path": "/xadmin/demo/user_profile",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__AutoGenPage__UserProfileList' */'D:/ccbft_py_work/Study_Work/tyadmin_demo_finish/tyadmin/src/pages/AutoGenPage/UserProfileList'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              }
            ]
          },
          {
            "name": "TyadminBuiltin",
            "icon": "VideoCamera",
            "path": "/xadmin/sys",
            "routes": [
              {
                "name": "TyAdminLog",
                "icon": "smile",
                "path": "/xadmin/sys/ty_admin_sys_log",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__TyAdminBuiltIn__TyAdminSysLogList' */'D:/ccbft_py_work/Study_Work/tyadmin_demo_finish/tyadmin/src/pages/TyAdminBuiltIn/TyAdminSysLogList'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              },
              {
                "name": "TyAdminVerify",
                "icon": "smile",
                "path": "/xadmin/sys/ty_admin_email_verify_record",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__TyAdminBuiltIn__TyAdminEmailVerifyRecordList' */'D:/ccbft_py_work/Study_Work/tyadmin_demo_finish/tyadmin/src/pages/TyAdminBuiltIn/TyAdminEmailVerifyRecordList'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              }
            ]
          },
          {
            "name": "passwordModify",
            "path": "/xadmin/account/change_password",
            "hideInMenu": true,
            "icon": "dashboard",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__TyAdminBuiltIn__ChangePassword' */'D:/ccbft_py_work/Study_Work/tyadmin_demo_finish/tyadmin/src/pages/TyAdminBuiltIn/ChangePassword'), loading: require('@/components/PageLoading/index').default}),
            "exact": true
          },
          {
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'D:/ccbft_py_work/Study_Work/tyadmin_demo_finish/tyadmin/src/pages/404'), loading: require('@/components/PageLoading/index').default}),
            "exact": true
          }
        ]
      },
      {
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'D:/ccbft_py_work/Study_Work/tyadmin_demo_finish/tyadmin/src/pages/404'), loading: require('@/components/PageLoading/index').default}),
        "exact": true
      }
    ]
  },
  {
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'D:/ccbft_py_work/Study_Work/tyadmin_demo_finish/tyadmin/src/pages/404'), loading: require('@/components/PageLoading/index').default}),
    "exact": true
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
