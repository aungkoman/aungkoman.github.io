---
layout: post
title: How to stay away from Depress?
description: Depression
image: ../images/fcc/kfc.jpg
---
### Auto Router မှာ Nested မဟုတ်ပဲ ရိုးရိုး Route တစ်ခုကို ဘယ်လိုသွားမလဲ?
Nested မှာ ဘယ်လို သွားလဲ အရင်ကြည့်မယ်။


Documentation မှာတော့ ဒီလို ပြတယ်
https://pub.dev/packages/auto_route#navigating-between-screens

```dart
// get the scoped router by calling        
AutoRouter.of(context)        
// or using the extension        
context.router        
        
// adds a new entry to the pages stack        
router.push(const BooksListRoute())      
// or by using using paths      
router.pushNamed('/books') 

// removes last entry in stack and pushs provided route     
// if last entry == provided route page will just be updated    
router.replace(const BooksListRoute())        
// or by using using paths      
router.replaceNamed('/books')      
    
// pops until provided route, if it already exists in stack        
// else adds it to the stack (good for web Apps).        
router.navigate(const BooksListRoute())      
// or by using using paths      
router.navigateNamed('/books')    
  
// on Web it calls window.history.back();
// on Native it navigates you back 
// to the previous location
router.navigateBack();

// adds a list of routes to the pages stack at once    
router.pushAll([    
   BooksListRoute(),    
   BookDetailsRoute(id:1),    
]);    
    
// This's like providing a completely new stack as it rebuilds the stack    
// with the list of passed routes    
// entires might just update if alright exist    
router.replaceAll([    
   LoginRoute()    
]);    
// pops the last page unless stack has 1 entry        
context.router.pop();       
// keeps poping routes until predicate is satisfied    
context.router.popUntil((route) => route.name == 'HomeRoute');    
// a simplifed version of the above line    
context.router.popUntilRouteWithName('HomeRoute');    
// pops all routes down to the root    
context.router.popUntilRoot();    
         
// removes the top most page in stack even if it's the last    
// remove != pop, it doesn't respect WillPopScopes it just     
// removes the entry.    
context.router.removeLast();     
    
// removes any route in stack that satisfis the predicate    
// this works exactly like removing items from a regualar List    
// <PageRouteInfo>[...].removeWhere((r)=>)    
context.router.removeWhere((route) => );    
        
// you can also use the common helper methods from context extension to navigate    
context.pushRoute(const BooksListRoute());    
context.replaceRoute(const BooksListRoute());    
context.navigateTo(const BooksListRoute());    
context.navigateNamedTo('/books');    
context.navigateBack();   
context.popRoute();

```

### Yes, it's really simple
```dart

@MaterialAutoRouter(
  replaceInRouteName: 'Page,Route',
  routes: [
    AutoRoute(path: '/', page: HomePage, children: [
      AutoRoute(
        path: 'posts',
        name: 'PostsRouter',
        page: EmptyRouterPage,
        children: [
          AutoRoute(
            path: '',
            page: PostsPage,
          ),
          AutoRoute(
            path: ':postId',
            page: SinglePostPage,
          )
        ],
      ),
      AutoRoute(
        path: 'users',
        name: 'UsersRouter',
        page: EmptyRouterPage,
        children: [
          AutoRoute(
            path: '',
            page: UsersPage,
          ),
          AutoRoute(
            path: ':userId',
            page: UserProfilePage,
          ),
        ],
      ),
      AutoRoute(
        path: 'settings',
        name: 'SettingsRouter',
        page: SettingsPage,
      )
    ]),

    AutoRoute(
        path: '/deep-link-page',
        page: DeepLinkPage,
    ),
  ],
)
class $AppRouter {}
```

### DeepLinkPage
```dart

class DeepLinkPage extends StatelessWidget {
  const DeepLinkPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Deep Link Page"),
      ),
      body: Center(
        child: Text("Deep Link Page"),
      ),
    );
  }
}
```

### How to route
```dart
AutoRouter.of(context).push(const DeepLinkRoute());
```


### Router တစ်ခုတည်း အောက်က child အချင်းချင်း ကူးချင်ရင်
```dart
context.router.push(UserProfileRoute(userId: users[i].id,),)
```


### တစ်ခြား router အောက်က Child တစ်ခုကို သွားချင်ရင်
```dart
context.navigateTo(PostsRouter(children: SinglePostRoute(postId: id))).
```

### Flutter Botton Navigation Bar နဲ့ ဘယ်လို ချိတ်လဲ?
```dart

class HomePage extends StatelessWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return AutoTabsScaffold(
      /* ဒီမှာ app bar ကို သက်ဆိုင်ရာ tab အလိုက် build လို့ ရတာပဲ။ child တွေ ဆိုရင်တော့ မသိ */
      appBarBuilder: (_, tabsRouter) => AppBar(
        backgroundColor: Colors.indigo,
        title: Text('FlutterBottomNav ${tabsRouter.activeIndex}'),
        centerTitle: true,
        leading: const AutoBackButton(),
      ),
      backgroundColor: Colors.indigo,
      /* သက်ဆိုင်ရာ route နဲ့ tab ကို တွဲပေးလိုက်တာ ဖြစ်မယ် */
      /* အခု လိုတာက သီးခြား Page တစ်ခုကို ဘယ်လို သွားကြမလဲ */
      routes: const [
        PostsRouter(),
        UsersRouter(),
        SettingsRouter(),
      ],
      bottomNavigationBuilder: (_, tabsRouter) {
        /* အိုကေ၊ bottom navigation bar တော့ flutter က ပါတဲ့ ကောင်နဲ့ ပြောင်းလိုက်ပြီ ၊ */
        return BottomNavigationBar(
          type: BottomNavigationBarType.fixed,
          /* ဒါက အမှန်ဆို int တွေ get / set လုပ်ပေးတာ ထင်တယ်၊ အခု Auto Router ပေးတဲ့ ကောင်တွေကို ခေါ်လိုက်တယ် */
          currentIndex: tabsRouter.activeIndex,
          onTap: tabsRouter.setActiveIndex,
          items: [
            BottomNavigationBarItem(
              icon: Icon(Icons.school),
              label: 'School',
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.business),
              label: 'Business',
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.home),
              label: 'Home',
            ),
          ],
        );

      },
    );
  }
}
```