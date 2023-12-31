from django.http import HttpResponse 
from django.template import Template, Context
from django.views.decorators.csrf import csrf_exempt
from .models import Historial
from django.shortcuts import redirect
#from automata.tm.tm  import Tape
from  automata.tm.ntm  import NTM

##
class CrearMaquinaTuring:
    @csrf_exempt
    def grafo(request):
        docExterno=open("C:/Users/WINDOWS/Documents/GitHub/Maquina-Turing/MaquinaTuring/vista/static/grafo.html")
        plt=Template(docExterno.read())
        docExterno.close()
        ctx=Context()
        documento=plt.render(ctx)
        return HttpResponse(documento)
    @csrf_exempt
    def maquinaTuring(request,idioma,controlPaso,velocidad):
        palabra = request.POST.get('palabra', '') # Obtener la palabra del usuario
        resultados = []
        p = list(palabra)
        palabraVal=True
        if len(p) > 0:
            for i in range(len(p)):
                if p[i] == 'b':
                    p[i] = 'a'
                if p[i] == 'a' or p[i] =='b':
                    palabraVal=True
                else:
                    palabraVal=False
                    break      
        else:
            palabraVal=False
        if palabraVal:
            resultados.append(f'La cadena "{palabra}" es aceptada')
        else:
            resultados.append(f'la cadena "{palabra}" no tiene suficientes letras o tiene algun caracter invalido') 
        Historial(palabrasIngresadas=palabra, estadoDelaPalabra=resultados).save()
        docExterno=open("C:/Users/WINDOWS/Documents/GitHub/Maquina-Turing/MaquinaTuring/vista/static/grafo.html")
        plt=Template(docExterno.read())
        docExterno.close()
        ctx=Context({'resultados': resultados, 'palabra': palabra, 'idioma':idioma, 'controlPaso':controlPaso, 'velocidad':velocidad})
        documento=plt.render(ctx)
        return HttpResponse(documento)
    
    @csrf_exempt
    def historial(request):
        historial_Palabras = Historial.objects.all()
        docExterno=open("C:/Users/WINDOWS/Documents/GitHub/Maquina-Turing/MaquinaTuring/vista/static/grafo.html")
        plt=Template(docExterno.read())
        docExterno.close()
        ctx=Context({'historial': historial_Palabras})
        documento=plt.render(ctx)
        return HttpResponse(documento) 
    
    @csrf_exempt
    def borrar_historial(request):
        Historial.objects.all().delete()
        return redirect('historial')