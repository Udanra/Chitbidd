from django import template

register = template.Library()

@register.filter
def multiply(value, arg):
    return value * arg

@register.filter
def dict_key(dictionary, key):
    return dictionary[key]