import { HeroService } from '../hero.service';
import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
  // create a new instance of the component you're testing
  let component;
  let HEROES;
  let mockHeroService;

  beforeEach(() => {
    // fill the heroes array with some data
    HEROES = [
      {
        id: 1,
        name: 'SpiderDude',
        strength: 8,
      },
      {
        id: 2,
        name: 'Wonderful Woman',
        strength: 24,
      },
      {
        id: 3,
        name: 'SuperDude',
        strength: 55,
      },
    ];

    // create a new hero service each time you run a test
    /** HerosComponent has one dependency -  HeroService.
     * HeroService makes an http call and returns data from a server.
     * We don't want to call the actual HeroService in this unit test-
     * that would be like testing two units at once.
     *
     * SO we create a "mock".
     *
     * Jasmine has a built in method createSpyObj, which takes an array
     * of the methods our mockHeroService needs. These methods should match
     * the methods from heroService utilized in the unit (heroes.component)
     * we're testing.
     */
    mockHeroService = jasmine.createSpyObj([
      'getHeroes',
      'addHero',
      'deleteHero',
    ]);

    component = new HeroesComponent(mockHeroService);
  });

  describe('Delete', () => {
    test('should remove the indicated hero from the heroes list', () => {
      /*==== ARRANGE ====*/
      component.heroes = HEROES;

      /*==== ACT ====*/
      component.delete(HEROES[2]);

      /*==== ASSERT ====*/
      expect(component.heroes.length).toBe(2);
    });
  });
});
