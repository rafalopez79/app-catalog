import { AppItem, AppVersion, AppVersionDetail } from './model';

describe('AppVersionDetail', () => {
    it('should create an instance', () => {
      expect(new AppVersionDetail({})).toBeTruthy();
    });
  
    it('should accept values in the constructor', () => {
      const d = new AppVersionDetail({'title':'title', 'description':'details'});
      expect(d.getTitle()).toEqual('title');
      expect(d.getDescription()).toEqual('details');
    });

    it('should deserialize', () => {
        const s = {'title':'Hola', 'description':'descr'}; 
        const d = new AppVersionDetail(JSON.parse(JSON.stringify(s)));
        expect(d.getTitle()).toEqual('Hola');
        expect(d.getDescription()).toEqual('descr');
    })
  });

  describe('AppVersion', () => {
    it('should create an instance', () => {
      expect(new AppVersion({})).toBeTruthy();
    });
  
    it('should accept values in the constructor', () => {
      const detail1 = {'title':'Hola1', 'description':'descr'}; 
      const detail2 = {'title':'Hola2', 'description':'descr'}; 
      const d = new AppVersion({'name':'1.0', 'releaseDate':'2012-04-23T18:25:43.511Z', 'details':[detail1, detail2]});
      expect(d.getName()).toEqual('1.0');
      expect(d.getReleaseDate()).toEqual(new Date('2012-04-23T18:25:43.511Z'));
      expect(d.getDetails().length == 2);
      expect(d.getDetails()[1].getTitle() == 'Hola2');
    });

    it('should deserialize', () => {
        const s = {'title':'Hola', 'description':'descr'}; 
        const d = new AppVersionDetail(JSON.parse(JSON.stringify(s)));
        expect(d.getTitle()).toEqual('Hola');
        expect(d.getDescription()).toEqual('descr');
    });

    describe('AppItem', () => {
        it('should create an instance', () => {
          expect(new AppItem({})).toBeTruthy();
        });
      
        it('should accept values in the constructor', () => {
          const d = new AppItem({'name':'app', 'icon':'http://icon.com'});
          expect(d.getName()).toEqual('app');
          expect(d.getIcon()).toEqual(new URL('http://icon.com'));
        });
    });
        
  });