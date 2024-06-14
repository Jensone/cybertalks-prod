import router from '@adonisjs/core/services/router';
const EventsController = () => import('#controllers/events_controller');
router.on('/').render('pages/index').as('homepage');
router.get('/events', [EventsController, 'all']).as('events');
router.get('/event/:id', [EventsController, 'show']).as('event');
router.get('events/create', async ({ view }) => {
    return view.render('events/create');
}).as('create');
router.post('/event/store', async ({ request, response, session }) => {
    const data = request.toJSON().body;
    console.log(data);
    session.flash('notification', {
        type: 'success',
        message: 'Thanks for adding a new event!'
    });
    response.redirect('/events');
}).as('store');
router.on('/contact').render('pages/contact').as('contact');
//# sourceMappingURL=routes.js.map